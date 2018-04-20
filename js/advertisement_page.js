$(function() {
    function loadData() {
        this.data = {
            Id: app.getParameterByName('NO'),
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
                  'pageNo': _this.data.pageIndex,
                  'everyPag': _this.data.everyPage,
            };
            app.posttoken(app.url.api_base + "schools/main/onlineListJsonResult", data,
                function(req) {
                    if (req.code == 0) {
                        if (req.data != undefined && req.data.length > 0) {
                            $('.schoolname').html(req.data[0].schoolname+' APP广告点位价目表');
                            var html = '';
                            $.each(req.data, function(i, v) {
                                   html+='<tr>';
                                   html+='<td>'+ (i+1) +'</td>';
                                   html+='<td>'+ replace(v.appname) +'</td>';
                                   html+='<td>'+ replace(v.quantity) +'</td>';
                                   html+='<td>'+ replace(v.adlocal) +'</td>';
                                   html+='<td>'+ replace(v.activity) +'</td>';
                                   html+='<td>'+ replace(v.showtype) +'</td>';
                                   html+='<td>'+ replace(v.interact) +'</td>';
                                   html+='<td>'+ replace(v.adimgexample) +'</td>';
                                   html+='<td>'+ replace(v.texts) +'</td>';
                                   html+='<td>'+ replace(v.imgformat) +'</td>';
                                   html+='<td>'+ replace(v.imgsize) +'</td>';
                                   html+='<td>'+ replace(v.imgnum) +'</td>';
                                   html+='<td>'+ replace(v.imgbulk) +'</td>';
                                   html+='<td>'+ replace(v.imgremark) +'</td>';
                                   html+='<td>'+ replace(v.periodicalprice) +'</td>';
                                   html+='<td>'+ replace(v.To4A) +'</td>';
                                   html+='<td>'+ replace(v.toguest) +'</td>';
                                   html+='<td>'+ replace(v.baseprice) +'</td>';
                                   html+='<td>'+ replace(v.separeaperiodicalpric) +'</td>';
                                   html+='<td>'+ replace(v.separeaTo4A) +'</td>';
                                   html+='<td>'+ replace(v.separeatoguest) +'</td>';
                                   html+='<td>'+ replace(v.separeabaseprice) +'</td>';
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

        //获取数据 
        // function laadData() {

        //             // html+='<tr>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='<td></td>';
        //             //        html+='</tr>';
        // }
    };

    new loadData();
});

