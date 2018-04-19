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
                    var req = JSON.parse(req)
                    if (req.code == 0) {
                        if (req.data != undefined && req.data.length > 0) {
                            var html = '';
                           
                            $.each(req.data, function(i, v) {
                                   html+='<tr>';
                                   html+='<td>'+ (i+1) +'</td>';
                                   html+='<td>'+ v.channeltype +'</td>';
                                   html+='<td>'+ v.adtype +'</td>';
                                   html+='<td>'+ v.channellocal +'</td>';
                                   html+='<td>'+ v.localexp +'</td>';
                                   html+='<td>'+ v.maplink +'</td>';
                                   html+='<td>'+ v.location +'</td>';
                                   html+='<td>'+ v.publishcycle +'</td>';
                                   html+='<td>'+ v.datearea +'</td>';
                                   html+='<td>'+ v.publishcount +'</td>';
                                   html+='<td>'+ v.adimgexample +'</td>';
                                   html+='<td>'+ v.adquality +'</td>';
                                   html+='<td>'+ v.adsize +'</td>';
                                   html+='<td>'+ v.adremark +'</td>';
                                   html+='<td>'+ v.periodicalprice +'</td>';
                                   html+='<td>'+ v.To4A +'</td>';
                                   html+='<td>'+ v.toguest +'</td>';
                                   html+='<td>'+ v.baseprice +'</td>';
                                   html+='<td>'+ v.normalperiodicalprice +'</td>';
                                   html+='<td>'+ v.normalTo4A +'</td>';
                                   html+='<td>'+ v.normaltoguest +'</td>';
                                   html+='<td>'+ v.normalbaseprice +'</td>';
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
