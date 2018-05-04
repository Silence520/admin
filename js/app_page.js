$(function() {
    function loadData() {
        this.data = {
            Id: app.getParameterByName('NO'),
            Name: app.getParameterByName('Name'),
            pageIndex: 1,
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

        //mode loaddata
        $(document).on('click', '.add-more-data', function() {

        })

        //获取数据 
        function laadData() {
            var data = {
                'schoolArea': _this.data.Id,
                'channleName':_this.data.Name,
                'pageNo': _this.data.pageIndex,
                'everyPage': _this.data.everyPage,
            };
            app.posttoken(app.url.api_base + "schools/main/wechatListJsonResult", data,
                function(req) {
                    if (req.code == 0) {
                        if (req.data != undefined && req.data.length > 0) {
                            $('.schoolname').html(req.data[0].schoolname!='null' ? req.data[0].schoolname:''+' APP价目表');
                            var html = '';
                            $.each(req.data, function(i, v) {
                                   html+='<tr>';
                                   html+='<td>'+ (i+1) +'</td>';
                                   html+='<td>'+ v.appname +'</td>';
                                   html+='<td>'+ v.quantity +'</td>';
                                   html+='<td>'+ v.adlocal +'</td>';
                                   html+='<td>'+ v.activity +'</td>';
                                   html+='<td>'+ v.showtype +'</td>';
                                   html+='<td>'+ v.interact +'</td>';
                                   html+='<td>'+ v.adimgexample +'</td>';
                                   html+='<td>'+ v.texts +'</td>';
                                   html+='<td>'+ v.imgformat +'</td>';
                                   html+='<td>'+ v.imgsize +'</td>';
                                   html+='<td>'+ v.imgnum +'</td>';
                                   html+='<td>'+ v.imgbulk +'</td>';
                                   html+='<td>'+ v.imgremark +'</td>';
                                   html+='<td>'+ v.periodicalprice +'</td>';
                                   html+='<td>'+ v.To4A +'</td>';
                                   html+='<td>'+ v.toguest +'</td>';
                                   html+='<td>'+ v.baseprice +'</td>';
                                   html+='<td>'+ v.separeaperiodicalpric +'</td>';
                                   html+='<td>'+ v.separeaTo4A +'</td>';
                                   html+='<td>'+ v.separeatoguest +'</td>';
                                   html+='<td>'+ v.separeabaseprice +'</td>';
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

