 //封装alert
 var Prompt = { 
    LMark: null, 
    show: function(meo, title, _ok_fn, _cancel_fn) {
         var Lbody = document.body;
         var LO = document.createElement("div");
         LO.style.background = "rgba(0,0,0,.2)";
         LO.style.position = "fixed";
         LO.style.zIndex = 1000000;
         LO.style.top = "0";
         LO.style.left = "0";
         LO.style.width = "100%";
         LO.style.height = "100%";
         LO.setAttribute("id", "LMark");
         this.LMark = LO;
         var La = document.createElement("div");
         La.style.position = "absolute";
         La.style.top = "50%";
         La.style.left = "50%";
         La.style.background = "#fff";
         La.style.borderRadius = "4px";
         La.style.padding = "15px 20px 20px";

         La.style.width = "350px";
         La.style.marginLeft = "-175px";
         La.style.marginTop = "-150px";
         La.style.textAlign = "center";
         LO.appendChild(La);
         var Lh = document.createElement("h1");
         Lh.style.padding = "10px 0 0px ";
         Lh.style.margin = "0px";
         Lh.style.color = "#333";
         Lh.style.fontWeight = "normal";
         Lh.style.fontSize = "18px";
         if (typeof title != "undefined") {
             if (typeof title == "function") { Lh.innerHTML = "" } else { Lh.innerHTML = title } } else { Lh.innerHTML = "" }
         if (Lh.innerHTML != "") { La.appendChild(Lh) }
         var Lp = document.createElement("p");
         Lp.style.padding = "0";
         Lp.style.lineHeight = "25px";
         Lp.style.margin = "15px";
         Lp.style.fontSize = "14px";
         Lp.style.color = "#666";
         Lp.innerHTML = meo;
         La.appendChild(Lp);
         var Lc = document.createElement("span");
         Lc.style.display = "inline-block";
         Lc.style.padding = "5px 30px";
         Lc.style.margin = "0 15px";
         Lc.innerHTML = "取消";
         Lc.setAttribute("id", "Lback");
         Lc.setAttribute("class", "btn btn-default ");
         if (typeof title != "undefined") {
             if (typeof title == "function") { this.cancel_event.event = _ok_fn } else { this.cancel_event.event = _cancel_fn }
             if (typeof this.cancel_event.event == "function") { La.appendChild(Lc) } }
         Lc.setAttribute("onclick", "Prompt.cancel_event.back()");
         var Lb = document.createElement("span");
         Lb.style.display = "inline-block";
         Lb.style.padding = "5px 30px";
         Lb.style.margin = "0 15px";
         
         Lb.innerHTML = "确定";
         Lb.setAttribute("id", "LBtn");
         Lb.setAttribute("class", "btn btn-primary");
         La.appendChild(Lb);
         if (typeof title != "undefined") {
             if (typeof title == "function") { this.ok_event.event = title } else { this.ok_event.event = _ok_fn } }
         Lb.setAttribute("onclick", "Prompt.ok_event.go(this)");
         Lbody.appendChild(LO) 
     },
     ok_event: { 
        event: function() {}, 
        go: function(ok) {
        if(ok.parentNode.getElementsByTagName('p')[0].innerHTML=='用户没有登录或者登录失效了！'){
            window.location.href='login.html';
        }
         this.event();
         var Lbody = document.body;
         var LO = document.getElementById("LMark");
         Lbody.removeChild(LO)
        }
    },
    cancel_event: { 
        event: function() {}, 
        back: function() { 
            this.event();
             var Lbody = document.body;
             var LO = document.getElementById("LMark");
             Lbody.removeChild(LO)
         } 
    } 
 };
 //封装loader
 var loader = { show: function() {
         var Lbody = document.body;
         var mark = document.createElement("div");
         mark.setAttribute("id", "loadermark");
         var lidivbox = document.createElement("div");
         lidivbox.setAttribute("id", "loaderbox");
         var lidp = document.createElement("p");
         lidp.innerHTML = "加载中...";
         var lidiv = document.createElement("div");
         lidiv.setAttribute("class", "sk-fading-circle");
         var lidiv1 = document.createElement("div");
         lidiv1.setAttribute("class", "sk-circle sk-circle1");
         var lidiv2 = document.createElement("div");
         lidiv2.setAttribute("class", "sk-circle sk-circle2");
         var lidiv3 = document.createElement("div");
         lidiv3.setAttribute("class", "sk-circle sk-circle3");
         var lidiv4 = document.createElement("div");
         lidiv4.setAttribute("class", "sk-circle sk-circle4");
         var lidiv5 = document.createElement("div");
         lidiv5.setAttribute("class", "sk-circle sk-circle5");
         var lidiv6 = document.createElement("div");
         lidiv6.setAttribute("class", "sk-circle sk-circle6");
         var lidiv7 = document.createElement("div");
         lidiv7.setAttribute("class", "sk-circle sk-circle7");
         var lidiv8 = document.createElement("div");
         lidiv8.setAttribute("class", "sk-circle sk-circle8");
         var lidiv9 = document.createElement("div");
         lidiv9.setAttribute("class", "sk-circle sk-circle9");
         var lidiv10 = document.createElement("div");
         lidiv10.setAttribute("class", "sk-circle sk-circle10");
         var lidiv11 = document.createElement("div");
         lidiv11.setAttribute("class", "sk-circle sk-circle11");
         var lidiv12 = document.createElement("div");
         lidiv12.setAttribute("class", "sk-circle sk-circle12");
         lidivbox.appendChild(lidp);
         lidiv.appendChild(lidiv1);
         lidiv.appendChild(lidiv2);
         lidiv.appendChild(lidiv3);
         lidiv.appendChild(lidiv4);
         lidiv.appendChild(lidiv5);
         lidiv.appendChild(lidiv6);
         lidiv.appendChild(lidiv7);
         lidiv.appendChild(lidiv8);
         lidiv.appendChild(lidiv9);
         lidiv.appendChild(lidiv10);
         lidiv.appendChild(lidiv11);
         lidiv.appendChild(lidiv12);
         lidivbox.appendChild(lidiv);
         Lbody.appendChild(mark)
         Lbody.appendChild(lidivbox) },
         hide: function() { 
            var Lbody = document.body;
            var loaderbox = document.getElementById("loaderbox");
            var loadermark = document.getElementById("loadermark");
              Lbody.removeChild(loaderbox)
              Lbody.removeChild(loadermark)
            } };
 var app = {
     url: {
         api_base:"http://47.98.161.17:8080/",
     },
    
     post: function(_url,_data,su_fn,bool) {
            if(bool==true){
                 loader.show();
            }
         $.ajax({
             url: _url,
             data:_data,
             type: "post",
             // contentType:"application/json",
             datatype: 'json',
             success: function(msg, req) {
                 if(bool==true){
                    loader.hide();
                 }
                 su_fn(msg, req)
             },
             error: function(msg, textStatus) {
                if(bool==true){
                    loader.hide();
                 }
                 Prompt.show('系统错误！请稍后再试')
             }
         })
     },
      posttoken: function(_url, _data, su_fn) {
         $.ajax({
             url: _url,
             data:_data,
             type: "post",
             datatype: 'json',
             beforeSend: function(xhr) {
                token = app.getItem('userToken'); 
                xhr.setRequestHeader("authorization", "Bearer "+app.encode(token));  
                }, 
             success: function(msg, req) {
                 su_fn(msg, req)
             },
             error: function(msg,req) {
                // console.log(msg.readyState);
                
                //   if(msg.readyState==4){
                    Prompt.show('登录时间过长 请重新登录！','提示',function(){
                         app.removeItem('role');
                         app.removeItem('userName');
                         app.removeItem('userId');
                         app.removeItem('userToken');
                         app.go('login.html');
                    })
                     
                  // }else{
                  //     Prompt.show('系统错误！请稍后再试')
                  // }
             }
         })
     },
       //上传表格文件
      postfile: function(_url, _data, su_fn) {
         $.ajax({
                url: _url,
                type: 'POST',
                data: _data,
                async: false,
                cache: false,
                contentType: false,
                processData: false,
                datatype: 'multipart/form-data',
                beforeSend: function(xhr) {
                    // token = app.getItem('userToken'); 
                    // xhr.setRequestHeader("authorization", "Bearer "+app.encode(token));  
                }, 
                success: function(req) {
                      su_fn(req);
                },
                error: function (returnInfo) {
                     Prompt.show('上传失败！');
                }
                });
     },
     //base64编码
     utf8Decode: function(utftext) {
         var string = "";
         var i = 0;
         var c = 0;
         var c1 = 0;
         var c2 = 0;
         while (i < utftext.length) {
             c = utftext.charCodeAt(i);
             if (c < 128) {
                 string += String.fromCharCode(c);
                 i++;
             } else if ((c > 191) && (c < 224)) {
                 c2 = utftext.charCodeAt(i + 1);
                 string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                 i += 2;
             } else {
                 c2 = utftext.charCodeAt(i + 1);
                 c3 = utftext.charCodeAt(i + 2);
                 string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                 i += 3;
             }
         }
         return string;
     },
     //base64编码
     encode: function(input) {
         var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
         var output = "";
         var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
         var i = 0;
         input = this.utf8Decode(input);
         while (i < input.length) {
             chr1 = input.charCodeAt(i++);
             chr2 = input.charCodeAt(i++);
             chr3 = input.charCodeAt(i++);
             enc1 = chr1 >> 2;
             enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
             enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
             enc4 = chr3 & 63;
             if (isNaN(chr2)) {
                 enc3 = enc4 = 64;
             } else if (isNaN(chr3)) {
                 enc4 = 64;
             }
             output = output +
                 _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
                 _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
         }
         return output;
     },
     go: function(_url, ignoreCache) {
         if (ignoreCache === undefined) {
             ignoreCache = false;
         }
         //$.router.load(_url,true)
         window.location.href = _url;
     },
     back: function() {
         //$.router.back();
         window.history.back();
     },
     //本地存储  name为字符串   如果是value数组存储之前要类型装换成字符串
     addItem: function(name, value) {

         localStorage.setItem(name,value);
     },
     //删除本地数据
     removeItem: function(name) {
         localStorage.removeItem(name);
     },
     //获取本地数据
     getItem: function(name) {
         var v = localStorage.getItem(name);
         return (v == undefined ? null : v);
     },
     //存储本地用户ID
     putLoginUser: function(user) {
         sessionStorage.setItem("login_user", user);
     },
     //获取本地用户ID
     getLoginUser: function() {
         return sessionStorage.getItem("login_user");
     },
     //删除本地用户ID
     removeLoginUser: function() {
         return sessionStorage.removeItem("login_user");
     },
     //判断用户是否登录
     isLogin: function() {
         var userId = sessionStorage.getItem("login_user");
         if (userId == null || userId === undefined || userId == "") {
             return false;
             app.go("login.html");
         } else {
             return true;
         }
     },
     //包含操作系统目录/mnt并以其开头,则处理掉该目录
     replaceMnt: function(imgUrl) {
         if (imgUrl == null || imgUrl === undefined || imgUrl == "" || (imgUrl.indexOf("/mnt") < 0)) {
             return imgUrl;
         } else {
             imgUrl = imgUrl.replace("/mnt", "");
             return imgUrl;
         }
     },
     getParameterByName: function(name) {
         var match = RegExp('[?&]' + name + '=([^&]*)')
             .exec(window.location.search);
         return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
     },
     //去除空格
     Trim: function(str, is_global) {
         var result;
         result = str.replace(/(^\s+)|(\s+$)/g, "");
         if (is_global.toLowerCase() == "g") {
             result = result.replace(/\s/g, "");
         }
         return result;
     },

 }
 Date.prototype.Format = function(fmt) { //author: meizz 
         var o = {
             "M+": this.getMonth() + 1, //月份 
             "d+": this.getDate(), //日 
             "h+": this.getHours(), //小时 
             "m+": this.getMinutes(), //分 
             "s+": this.getSeconds(), //秒 
             "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
             "S": this.getMilliseconds() //毫秒 
         };
         if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
         for (var k in o)
             if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
         return fmt;
     }
     //textarea自适应封装
 var autoTextarea = function(elem, extra, maxHeight) {
     extra = extra || 0;
     var isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,
         isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),
         addEvent = function(type, callback) {
             elem.addEventListener ?
                 elem.addEventListener(type, callback, false) :
                 elem.attachEvent('on' + type, callback);
         },
         getStyle = elem.currentStyle ? function(name) {
             var val = elem.currentStyle[name];
             if (name === 'height' && val.search(/px/i) !== 1) {
                 var rect = elem.getBoundingClientRect();
                 return rect.bottom - rect.top -
                     parseFloat(getStyle('paddingTop')) -
                     parseFloat(getStyle('paddingBottom')) + 'px';
             };
             return val;
         } : function(name) {
             return getComputedStyle(elem, null)[name];
         },
         minHeight = parseFloat(getStyle('height'));
     elem.style.resize = 'none';
     var change = function() {
         var scrollTop, height,
             padding = 0,
             style = elem.style;
         if (elem._length === elem.value.length) return;
         elem._length = elem.value.length;
         if (!isFirefox && !isOpera) {
             padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
         };
         scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
         elem.style.height = minHeight + 'px';
         if (elem.scrollHeight > minHeight) {
             if (maxHeight && elem.scrollHeight > maxHeight) {
                 height = maxHeight - padding;
                 style.overflowY = 'auto';
             } else {
                 height = elem.scrollHeight - padding;
                 style.overflowY = 'hidden';
             };
             style.height = height + extra + 'px';
             scrollTop += parseInt(style.height) - elem.currHeight;
             document.body.scrollTop = scrollTop;
             document.documentElement.scrollTop = scrollTop;
             elem.currHeight = parseInt(style.height);
         };
     };
     addEvent('propertychange', change);
     addEvent('input', change);
     addEvent('focus', change);
     change();
 };
 //移除数组中的指定元素
 Array.prototype.remove = function(val) {
     var index = this.indexOf(val);
     if (index > -1) {
         this.splice(index, 1);
     }
 };


 //删除一行商品
 // $(document).on('click', '.tabledel', function() {
 //     silence_Prompt.show('确定要删除本条数据吗？', delyes);
 //     $('.table').attr('del', $(this).parents('tr').index());
 //     // $(this).parents('tr').remove();
 // });

 // function delyes() {
 //     var num = $('.table').attr('del');
 //     console.log(num)
 //     $('.table tbody').find('tr:eq(' + num + ')').remove();
 //     if ($('.table tbody').find('tr').length == 0) {
 //         $('.table').remove();
 //     }
 // }
