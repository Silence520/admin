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
        $(document).on('click', '.add-more-data  span', function() {
               _this.data.pageIndex+=1;
              laadData();
        })

        //获取数据 

        function laadData() {
            var data = {
                'schoolArea': _this.data.Id,
                'pageNo': _this.data.pageIndex,
                'everyPage': _this.data.everyPage,
            };
            app.posttoken(app.url.api_base + "schools/main/OfflineListJsonResult", data,
                function(req) {
                    if (req.code == 0) {
                        if (req.data != undefined && req.data.length > 0) {
                            var html = '';
                           
                            $.each(req.data, function(i, v) {
                                   html+='<tr>';
                                   html+='<td>'+ (i+1) +'</td>';
                                   html+='<td>'+replace( v.channeltype )+'</td>';
                                   html+='<td>'+replace( v.adtype )+'</td>';
                                   html+='<td>'+replace( v.channellocal )+'</td>';
                                   html+='<td>'+replace( v.localexp )+'</td>';
                                   html+='<td>'+replace( v.maplink )+'</td>';
                                   html+='<td>'+replace( v.location )+'</td>';
                                   html+='<td>'+replace( v.publishcycle )+'</td>';
                                   html+='<td>'+replace( v.datearea )+'</td>';
                                   html+='<td>'+replace( v.publishcount )+'</td>';
                                   html+='<td>'+replace( v.adimgexample )+'</td>';
                                   html+='<td>'+replace( v.adquality )+'</td>';
                                   html+='<td>'+replace( v.adsize )+'</td>';
                                   html+='<td>'+replace( v.adremark )+'</td>';
                                   html+='<td>'+replace( v.periodicalprice )+'</td>';
                                   html+='<td>'+replace( v.To4A )+'</td>';
                                   html+='<td>'+replace( v.toguest )+'</td>';
                                   html+='<td>'+replace( v.baseprice )+'</td>';
                                   html+='<td>'+replace( v.normalperiodicalprice )+'</td>';
                                   html+='<td>'+replace( v.normalTo4A )+'</td>';
                                   html+='<td>'+replace( v.normaltoguest )+'</td>';
                                   html+='<td>'+replace( v.normalbaseprice )+'</td>';
                                   html+='</tr>';
                            })
                             if(_this.data.pageIndex>1){
                                    $('.table>tbody').append(html)
                             }else{
                                    $('.table>tbody').html(html)
                             }
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
    
