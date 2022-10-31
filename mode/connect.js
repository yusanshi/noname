'use strict';
game.import('mode',function(lib,game,ui,get,ai,_status){
	return {
		name:'connect',
		start:function(){
			var directstartmode=lib.config.directstartmode;
			ui.create.menu(true);

			event.textnode=ui.create.div('','输入联机地址');
			
			var createNode=function(){
				if(event.created) return;
				if(directstartmode&&lib.node){
					ui.exitroom=ui.create.system('退出房间',function(){
						game.saveConfig('directstartmode');
						game.reload();
					},true);
					game.switchMode(directstartmode);
					return;
				}
				if(lib.node&&window.require){
					ui.startServer=ui.create.system('启动服务器',function(e){
						e.stopPropagation();
						ui.click.connectMenu();
					},true);
				}

				event.created=true;
				{
					const node=ui.create.div('.shadowed');
					node.style.width='300px';
					node.style.height='30px';
					node.style.lineHeight='30px';
					node.style.fontFamily='xinwei';
					node.style.fontSize='30px';
					node.style.padding='10px';
					node.style.left='calc(50% - 150px)';
					node.style.top='calc(50% - 90px)';
					node.style.whiteSpace='nowrap';
					node.innerHTML=get.connectNickname();
					node.contentEditable=true;
					node.style.webkitUserSelect='text';
					node.style.textAlign='center';

					// paste as plain text
					node.addEventListener('paste', function (e) {
						e.preventDefault()
						const text = (e.originalEvent || e).clipboardData.getData('text/plain');
						document.execCommand("insertHTML", false, text);
					});
					node.onblur=function(){
						node.innerHTML=node.innerHTML.replace(/<br>/g,'');
						if(!node.innerHTML||get.is.banWords(node.innerHTML)){
							node.innerHTML='无名玩家';
						}
						node.innerHTML=node.innerHTML.slice(0,12);
						game.saveConfig('connect_nickname',node.innerHTML);
						game.saveConfig('connect_nickname',node.innerHTML,'connect');
					}

					ui.window.appendChild(node);
					ui.nicknamenode=node;
				}

				event.nicknamenode=ui.create.div('','输入联机昵称');
				{
					const text=event.nicknamenode;
					text.style.width='400px';
					text.style.height='30px';
					text.style.lineHeight='30px';
					text.style.fontFamily='xinwei';
					text.style.fontSize='30px';
					text.style.padding='10px';
					text.style.left='calc(50% - 200px)';
					text.style.top='calc(50% - 150px)';
					text.style.textAlign='center';
					ui.window.appendChild(text);
					ui.nicknametext=text;
				}

				var node=ui.create.div('.shadowed');
				node.style.width='600px';
				node.style.height='30px';
				node.style.lineHeight='30px';
				node.style.fontFamily='xinwei';
				node.style.fontSize='30px';
				node.style.padding='10px';
				node.style.left='calc(50% - 300px)';
				node.style.top='calc(50% + 60px)';
				node.style.whiteSpace='nowrap';
				node.innerHTML=lib.config.connect_ip||lib.defaultConnectURL;
				node.contentEditable=true;
				node.style.webkitUserSelect='text';
				node.style.textAlign='center';

				// paste as plain text
				node.addEventListener('paste', function (e) {
					e.preventDefault()
					var text = (e.originalEvent || e).clipboardData.getData('text/plain');
					document.execCommand("insertHTML", false, text);
				});

				// TODO: bug: after modify the nickname and connecting ip, the displayed content
				// at the top left is not changed. Need a refresh again
				var connect=function(e){
					event.textnode.innerHTML='正在连接...';
					clearTimeout(event.timeout);
					if(e) e.preventDefault();
					game.saveConfig('connect_ip',node.innerHTML);
					game.saveConfig('connect_ip',node.innerHTML,'connect');
					game.connect(node.innerHTML,function(success){
						if(!success&&event.textnode){
							alert('连接失败');
							event.textnode.innerHTML='输入联机地址(默认wss协议)';
						}
					});
				};
				node.addEventListener('keydown',function(e){
					if(e.keyCode==13){
						connect(e);
					}
				});
				ui.window.appendChild(node);
				ui.ipnode=node;
				
				var text=event.textnode;
				text.style.width='400px';
				text.style.height='30px';
				text.style.lineHeight='30px';
				text.style.fontFamily='xinwei';
				text.style.fontSize='30px';
				text.style.padding='10px';
				text.style.left='calc(50% - 200px)';
				text.style.top='calc(50%)';
				text.style.textAlign='center';
				ui.window.appendChild(text);
				ui.iptext=text;

				var button=ui.create.div('.menubutton.highlight.large.pointerdiv','连接',connect);
				button.style.width='70px';
				button.style.left='calc(50% - 35px)';
				button.style.top='calc(50% + 160px)';
				ui.window.appendChild(button);
				ui.ipbutton=button;

				ui.default_connect_button=ui.create.system('连接默认地址',function(){
					node.innerHTML=lib.defaultConnectURL;
					connect();
				},true);
				if(!get.config('default_connect_button')){
					ui.default_connect_button.style.display='none';
				}
				ui.recentIP=ui.create.system('最近连接',null,true);
				var clickLink=function(){
					node.innerHTML=this.innerHTML;
					connect();
				};
				lib.setPopped(ui.recentIP,function(){
					if(!lib.config.recentIP.length) return;
					var uiintro=ui.create.dialog('hidden');
					uiintro.listen(function(e){
						e.stopPropagation();
					});
					var list=ui.create.div('.caption');
					for(var i=0;i<lib.config.recentIP.length;i++){
						ui.create.div('.text.textlink',list,clickLink).innerHTML=get.trimip(lib.config.recentIP[i]);
					}
					uiintro.add(list);
					var clear=uiintro.add('<div class="text center">清除</div>');
					clear.style.paddingTop=0;
					clear.style.paddingBottom='3px';
					clear.listen(function(){
						lib.config.recentIP.length=0;
						game.saveConfig('recentIP',[]);
						uiintro.delete();
					});
					return uiintro;
				},220);
				lib.init.onfree();
			}
			if(window.isNonameServer){
				game.connect(window.isNonameServerIp||'localhost');
			}
			else if(lib.config.reconnect_info){
				var info=lib.config.reconnect_info;
				game.onlineID=info[1];
				game.roomId=info[2];
				if(typeof game.roomId=='string'){
					game.roomIdServer=true;
				}
				var n=5;
				var connect=function(){
					event.textnode.innerHTML='正在连接...';
					game.connect(info[0],function(success){
						if(!success&&n--){
							createNode();
							event.timeout=setTimeout(connect,1000);
						}
						else{
							event.textnode.innerHTML='输入联机地址';
						}
					});
				};
				event.timeout=setTimeout(connect,500);
				_status.createNodeTimeout=setTimeout(createNode,2000);
			}
			else{
				createNode();
			}
			if(!game.onlineKey){
				game.onlineKey=localStorage.getItem(lib.configprefix+'key');
				if(!game.onlineKey){
					game.onlineKey=get.id();
					localStorage.setItem(lib.configprefix+'key',game.onlineKey);
				}
			}
			_status.connectDenied=createNode;
			for(var i in lib.element.event){
				event.parent[i]=lib.element.event[i];
			}
			event.parent.custom={
				add:{},
				replace:{}
			};
			setTimeout(lib.init.onfree,1000);
		}
	};
});
