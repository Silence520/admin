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
            app.posttoken(app.url.api_base + "schools/main/wechatListJsonResult", data,
                function(req) {
                    if (req.code == 0) {
                        if (req.data != undefined && req.data.length > 0) {
                            $('.schoolname').html(req.data[0].schoolname!='null' ? req.data[0].schoolname:''+' 微信订阅号价目表');
                            var html = '';
                            $.each(req.data, function(i, v) {
                                   html+='<tr>';
                                   html+='<td>'+ (i+1) +'</td>';
                                   html+='<td>'+replace( v.wechatname )+'</td>';
                                   html+='<td>'+replace( v.supplier )+'</td>';
                                   html+='<td>'+replace( v.webchatid )+'</td>';
                                   html+='<td>'+replace( v.schoolname )+'</td>';
                                   html+='<td>'+replace( v.showtype )+'</td>';
                                   html+='<td>'+replace( v.adexample )+'</td>';
                                   html+='<td>'+replace( v.source )+'</td>';
                                   html+='<td>'+replace( v.topaverage )+'</td>';
                                   html+='<td></td>';
                                   html+='<td></td>';
                                   html+='<td></td>';
                                   html+='<td></td>';
                                   html+='<td></td>';
                                   html+='<td>'+replace( v.periodicalprice )+'</td>';
                                   html+='<td></td>';
                                   html+='<td>'+replace( v.toguest )+'</td>';
                                   html+='<td>'+replace( v.baseprice )+'</td>';
                                   html+='<td>'+replace( v.secondperiodicalprice )+'</td>';
                                   html+='<td>'+replace( v.secondTo4A )+'</td>';
                                   html+='<td>'+replace( v.secondtoguest )+'</td>';
                                   html+='<td>'+replace( v.secondbaseprice )+'</td>';
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

// //订阅号名称
//     private String wechatname;
    
//     //供应商
//     private String supplier;

//     //订阅号账号
//     private String webchatid;

//     //关联学校
//     private String schoolname;

//     //表现形式
//     private String showtype;



//     //广告曝光实例
//     private String adexample;

//     //素材提供
//     private String source;

//     //首条平均阅读数(静态)
//     private String topaverage;

//     //首条刊例价
//     private String periodicalprice;

//     //首条To4A
//     private String To4A;

//     //首条To直客
//     private String toguest;

//     //首条成本
//     private String baseprice;

//     //二条平均阅读数(静态)
//     private String secondaverage;

//     //二条刊例价
//     private String secondperiodicalprice;

//     //二条To4A
//     private String secondTo4A;

//     //二条To直客
//     private String secondtoguest;

//     //二条成本
//     private String secondbaseprice;
