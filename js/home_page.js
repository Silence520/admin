$(function() {
    function loadData() {
        this.data = {
            Id: app.getParameterByName('NO'),
            pageIndex: 1,
            everyPage: 10,
            province:'',
            city:'',
            area:'',
            type:'',
        };
        this.init();
    }

    loadData.prototype.init = function() {
        var _this = this;
        laadData();
        
        //下载数据
        $(document).on('click', '.downloadData', function() {})

        //mode loaddata
        $(document).on('click', '.add-more-data', function() {

        })


        //获取省份
        function getprovince(){
            app.posttoken(app.url.api_base + "selections/staffs", {},
                    function(req) {
                        if (req.code == 0) {
                            var data = req.data.staffs;
                            if (data.length > 0) {
                                var html = '<option value="">请选择</option>';
                                $.each(data, function(i, v) {
                                    html += '<option value="' + v.id + '">' + v.text + '</option>';
                                });
                                $('#province').html(html);
                            }
                        } else {
                            Prompt.show(req.message);
                        }
                    });
             }

         //获取城市
        function getcity(){
            app.posttoken(app.url.api_base + "selections/staffs", {},
                    function(req) {
                        if (req.code == 0) {
                            var data = req.data.staffs;
                            if (data.length > 0) {
                                var html = '<option value="">请选择</option>';
                                $.each(data, function(i, v) {
                                    html += '<option value="' + v.id + '">' + v.text + '</option>';
                                });
                                $('#city').html(html);
                            }
                        } else {
                            Prompt.show(req.message);
                        }
                    });
             }

             //获取地区
           function getarea(){
            app.posttoken(app.url.api_base + "selections/staffs", {},
                    function(req) {
                        if (req.code == 0) {
                            var data = req.data.staffs;
                            if (data.length > 0) {
                                var html = '<option value="">请选择</option>';
                                $.each(data, function(i, v) {
                                    html += '<option value="' + v.id + '">' + v.text + '</option>';
                                });
                                $('#area').html(html);
                            }
                        } else {
                            Prompt.show(req.message);
                        }
                    });
             }

             //获取类型
             function gettype(){
                       app.posttoken(app.url.api_base + "selections/staffs", {},
                            function(req) {
                                if (req.code == 0) {
                                    var data = req.data.staffs;
                                    if (data.length > 0) {
                                        var html = '<option value="">请选择</option>';
                                        $.each(data, function(i, v) {
                                            html += '<option value="' + v.id + '">' + v.text + '</option>';
                                        });
                                        $('#type').html(html);
                                    }
                                } else {
                                    Prompt.show(req.message);
                                }
                        });
             }


             //获取数据 
             function laadData() {
                  // onlineResult
                 app.posttoken(app.url.api_base + "schools/main/summResult", {},
                        function(req) {
                             var data=JSON.parse(req)
                             var html='';
                             $.each(data,function(i,v){
                                           html+='<tr>';
                                           html+='<td> <input type="checkbox" ></td>';
                                           html+='<td>'+(i+1)+'</td>';
                                           html+='<td>'+v.area+'</td>';
                                           html+='<td>'+v.schoolname+'</td>';
                                           html+='<td><a href="maillist.html?NO='+v.id+'">'+v.offlinetoguest+'</a></td>';
                                           html+='<td><a href="campuslist.html?NO='+v.id+'">'+v.schoolgroup+'</a></td>';
                                           html+='<td><a href="online.html?NO='+v.id+'">'+v.onlinecount+'</a></td>';
                                           html+='<td>¥ '+v.onlineperiodicalprice+'</td>';
                                           html+='<td><a href="offlineresources.html?NO='+v.id+'">'+v.offlinetoguest+'</a></td>';
                                           html+='<td>¥ '+v.offlineperiodicalprice+'</td>';
                                           html+='<td>'+v.createtype+'</td>';
                                           html+='</tr>';
                             })
                             $('.table>tbody').html(html)
                   });   
             }
        };

    new loadData();
});