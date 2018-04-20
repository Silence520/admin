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
                'everyPage': _this.data.everyPage,
            };
            app.posttoken(app.url.api_base + "schools/main/onlineListJsonResult", data,
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
    // private Long id ;
    // //关联学校
    // private String schoolname;
    // //校区名称
    // private String schoolarea;
    //  //供应商
    // private String supplier;
    // //渠道类型
    // private String channeltype;
    // //广告形式
    // private String adtype;
    // //渠道位置
    // private String channellocal;
    //  //点位描述
    // private String localexp;
    // //地图链接
    // private String maplink;
    // //位置属性
    // private String location;
    // //发布周期
    // private String publishcycle;
    // //档期
    // private String datearea;
    // //发布数量
    // private String publishcount;
    // //广告曝光实例(图片)
    // private String adimgexample
    // //广告材质
    // private String adquality;
    // //广告尺寸
    // private String adsize;
    // //广告备注
    // private String adremark;
    // //刊例价
    // private String periodicalprice;
    // //To4A
    // private String To4A;
    // //首条To直客
    // private String toguest;
    // //成本
    // private String baseprice;
    // //刊例价(非一线)
    // private String normalperiodicalprice;
    // //To4A(非一线)
    // private String normalTo4A;
    // //To直客(非一线)
    // private String normaltoguest;
    // //成本(非一线)
    // private String normalbaseprice;
