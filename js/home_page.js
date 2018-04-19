$(function() {
    function loadData() {
        this.data = {
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
        getprovince();
         //export-btn
        $(document).on('click', '.sea-btn', function() {
            laadData();
        })

        //export-btn
        $(document).on('click', '.export-btn', function() {})

        //mode loaddata
        $(document).on('click', '.add-more-data', function() {

        })

        //省份
        $(document).on('change', '#province', function() {
                $('#city option').remove();
                $('#area option').remove();
                var num = $('#province').val();
                _this.data.province=num;
                _this.data.city='';
                _this.data.area='';
                getcity(num)
        });

         //城市
        $(document).on('change', '#city', function() {
                    $('#area option').remove();
                    var num = $('#city').val();
                    _this.data.city=num;
                    _this.data.area='';
                    getarea(num)
        });

        //城市
        $(document).on('change', '#area', function() {
                    var num = $('#area').val();
                    _this.data.area=num;
        });

        //类型
        $(document).on('change', '#type', function() {
                    var num = $('#type').val();
                    _this.data.type=num;
        });

        //获取省份
        function getprovince(){
            app.posttoken(app.url.api_base + "/schools/main/areaListJsonResult", {},
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
        function getcity(num){
            var data = {
                   'cityCode': num
            };
            app.posttoken(app.url.api_base + "selections/staffs", data,
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
           function getarea(num){
             var data = {
                    'cityCode': num
             };
                    app.posttoken(app.url.api_base + "selections/staffs", data,
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
                  // var data={
                  //             _this.data.pageIndex,
                  //             _this.data.everyPage,
                  //             _this.data.province,
                  //             _this.data.city,
                  //             _this.data.area,
                  //             _this.data.type,
                  // }
                 app.posttoken(app.url.api_base + "schools/main/summResult", {},
                        function(req) {
                             var html='';
                             $.each(req,function(i,v){
                                           html+='<tr>';
                                           html+='<td> <input type="checkbox" ></td>';
                                           html+='<td>'+(i+1)+'</td>';
                                           html+='<td>'+v.area+'</td>';
                                           html+='<td>'+v.schoolname+'</td>';
                                           if (v.offlinetoguest>0) {
                                                html+='<td><a href="maillist.html?NO='+v.id+'">'+v.offlinetoguest+'</a></td>';
                                            }else{
                                                html+='<td>'+v.offlinetoguest+'</td>';
                                            }
                                           html+='<td><a href="campuslist.html?NO='+v.id+'">'+v.schoolgroup+'</a></td>';
                                           if(v.onlinecount>0){
                                                html+='<td><a href="online.html?NO='+v.id+'">'+v.onlinecount+'</a></td>';
                                           }else{
                                                html+='<td>'+v.onlinecount+'</td>';
                                           }
                                           html+='<td>¥ '+v.onlineperiodicalprice+'</td>';
                                            if(v.offlinetoguest>0){
                                                html+='<td><a href="offlineresources.html?NO='+v.id+'">'+v.offlinetoguest+'</a></td>';
                                           }else{
                                                html+='<td>'+v.offlinetoguest+'</td>';
                                           }
                                           
                                           html+='<td>¥ '+v.offlineperiodicalprice+'</td>';
                                           html+='<td>'+v.createtype+'</td>';
                                           html+='</tr>';
                             })
                             if(_this.data.pageIndex>1){
                                    $('.table>tbody').append(html)
                             }else{
                                    $('.table>tbody').html(html)
                             }
                   });   
             }
        };

    new loadData();
});