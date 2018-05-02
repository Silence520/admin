$(function() {
    function loadData() {
        this.data = {
            Id: app.getParameterByName('NO'),
            pageIndex:1,
            everyPage: 10,
        };
        this.init();
    }

    loadData.prototype.init = function() {
        var _this = this;
        laadData();
        //返回
        $(document).on('click', '.backup', function() {
            window.history.back()
        })
        

        //获取数据 pageNo和everyPage
        function laadData() {
            var data = {
                'schoolId': _this.data.Id,
                // 'pageNo': _this.data.pageIndex,
                // 'everyPage': _this.data.everyPage,
            };
            app.posttoken(app.url.api_base + "schools/main/onlineListJsonResult", data,
                function(req) {
                    if (req.code == 0) {
                        if (req.data != undefined && req.data.length > 0) {
                            var html = '';
                            $('.schoolname').html(_this.data.Id+' 线上资源概览');
                            $.each(req.data, function(i, v) {
                                    html+='<tr>';
                                   html+='<td>'+(i+1)+'</td>';
                                   if(v.channeltype=='微博'){
                                     html+='<td><a href="weibo.html?NO='+_this.data.Id+'&&Name='+v.id+'">'+replace(v.channelname)+'</a></td>';
                                   }else if(v.channeltype=='APP'){
                                    html+='<td><a href="advertisement.html?NO='+_this.data.Id+'&&Name='+v.id+'">'+replace(v.channelname)+'</a></td>';
                                   }else{
                                    html+='<td><a href="weixin.html?NO='+_this.data.Id+'&&Name='+v.id+'">'+replace(v.channelname)+'</a></td>';
                                   }
                                   
                                   html+='<td>'+replace(v.channeltype)+'</td>';
                                   html+='<td>'+replace(v.fans)+'</td>';
                                   html+='<td>'+replace(v.daily)+'</td>';
                                   html+='<td>'+replace(v.isofficial)+'</td>';
                                   // html+='<td>'+replace(v.periodicalprice)+'</td>';
                                   // html+='<td>'+replace(v.to4A)+'</td>';
                                   // html+='<td>'+replace(v.toguest)+'</td>';
                                   html+="<td></td><td></td><td></td>"
                                   html+='<td>'+replace(v.remarks)+'</td>';
                                   html+='</tr>';
                            })
                            $('.table>tbody').html(html)
                        } else {
                            Prompt.show('暂无数据！', '提示', function() {});
                            $('.table').remove();
                            // $('.datalistbox').html('<p class="nodata">暂无数据！</p>');
                        }
                    } else {
                        Prompt.show(req.massage, '提示', function() {})
                    }

                });
        }



    };

    new loadData();
});
