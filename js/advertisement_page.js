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
                  'id':_this.data.Name,
                  'pageNo': _this.data.pageIndex,
                  'everyPage': _this.data.everyPage,
            };
            app.posttoken(app.url.api_base + "schools/main/appListJsonResult", data,
                function(req) {
                    if (req.code == 0) {
                        if (req.data != undefined && req.data.length > 0) {
                            // $('.schoolname').html(_this.data.Id+' APP广告点位价目表');
                            $('.schoolname').html('APP广告点位价目表');
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
                                   html+='<td><a href="'+v.adimgexample+'">'+ replace(v.adimgexample) +'</a></td>';
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
                                   html+='<td>'+ new Date(replace(v.bizdateStart)).Format('yyyy-MM-dd') +'</td>';
                                   html+='<td>'+new Date(replace(v.bizdateEnd)).Format('yyyy-MM-dd')  +'</td>';
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


// //app名称
//     private String appname;
    
//      //供应商
//     private String quantity;

//     //广告位置
//     private String adlocal;

//     //曝光量描述
//     private String activity;

//     //表现形式
//     private String showtype;

//     //互动方式
//     private String interact;

//     //广告曝光实例(图片)
//     private String adimgexample;

//     //素材字数(文字)
//     private String texts;

//     //素材格式
//     private String imgformat;

//     //素材尺寸(图片)
//     private String imgsize;

//     //素材数量(图片)
//     private String imgnum;

//     //素材大小(图片)
//     private String imgbulk;

//     //素材备注(图片)
//     private String imgremark;

//     //刊例价
//     private String periodicalprice;

//     //To4A
//     private String To4A;

//     //To直客
//     private String toguest;

//     //成本
//     private String baseprice;

//     //刊例价(区域定向)
//     private String separeaperiodicalprice;

//     //To4A(区域定向)
//     private String separeaTo4A;

//     //To直客(区域定向)
//     private String separeatoguest;

//     //成本(区域定向)
//     private String separeabaseprice;

//     //今年档期
//     private String bizdate;
