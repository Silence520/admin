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
            app.posttoken(app.url.api_base + "schools/main/weiboListJsonResult", data,
                function(req) {
                    if (req.code == 0) {
                        if (req.data != undefined && req.data.length > 0) {
                            // $('.schoolname').html(req.data[0].schoolname!='null' ? req.data[0].schoolname+' 微博刊例价表':'');
                            $('.schoolname').html(' 微博刊例价表');
                            var html = '';
                            $.each(req.data, function(i, v) {
                                   html+='<tr>';
                                   html+='<td>'+ (i+1) +'</td>';
                                   html+='<td>'+ replace(v.weiboname )+'</td>';
                                   html+='<td>'+ replace(v.supplier )+'</td>';
                                   html+='<td>'+ replace(v.schoolname )+'</td>';
                                   html+='<td>'+ replace(v.accounttype )+'</td>';
                                   html+='<td>'+ replace(v.authinfo )+'</td>';
                                   html+='<td><a href="'+v.weibolink+'">'+ replace(v.weibolink )+'</a></td>';
                                   html+='<td>'+ replace(v.url )+'</td>';
                                   html+='<td>'+ replace(v.showtimes )+'</td>';
                                   html+='<td><a href="'+v.adimgexample+'">'+ replace(v.adimgexample )+'</a></td>';
                                   
                                   html+='<td>'+ replace(v.periodicalprice )+'</td>';
                                   html+='<td>'+ replace(v.To4A )+'</td>';
                                   html+='<td>'+ replace(v.toguest )+'</td>';
                                   html+='<td>'+ replace(v.baseprice )+'</td>';
                                   html+='<td>'+ replace(v.relayperiodicalprice )+'</td>';
                                   html+='<td>'+ replace(v.relayTo4A )+'</td>';
                                   html+='<td>'+ replace(v.relaytoguest )+'</td>';
                                   html+='<td>'+ replace(v.relaybaseprice )+'</td>';
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

// //学校表外键
//     private Long schoolid;


//     //微博名称
//     private String weiboname;
    
//     //供应商
//     private String supplier;
    
//      //关联学校
//     private String schoolname;

//     //账号类型
//     private String accounttype;

//     //认证信息
//     private String authinfo;

//     //微博链接
//     private String weibolink;

//     //域名
//     private String url;

//     //曝光量描述
//     private String showtimes;

//     //广告曝光实例(图片)
//     private String adimgexample;

//     //直发刊例价
//     private String periodicalprice;

//     //直发To4A
//     private String To4A;

//     //直发To直客
//     private String toguest;

//     //直发成本
//     private String baseprice;


//     //转发刊例价
//     private String relayperiodicalprice;

//     //转发To4A
//     private String relayTo4A;

//     //转发To直客
//     private String relaytoguest;

//     //转发成本
//     private String relaybaseprice;

