$(function() {
    function loadData() {
        this.data = {
            pageIndex: 1,
            everyPage: 10,
            country:'',
            province:'',
            city:'',
            area:'',
            type:'',
        };
        this.init();
    }

    loadData.prototype.init = function() {
        var _this = this;
        // laadData();
        getcountry();

        //查询
        $(document).on('click', '.sea-btn', function() {
              _this.data.pageIndex=1;
              $('.add-more-data').hide();
            laadData();
        })


        //导出报表
        $(document).on('click', '.export-btn', function() {
            var ArrId=eachListId();
             if(ArrId==''){
                  Prompt.show('请选择要导出的学校!');
                  return false;
              }
             var data = {
                          'provinceId':_this.data.province,
                          'cityId':_this.data.city,
                          'districtId':_this.data.area,
                          'ids':ArrId
            };
            window.open(app.url.api_base + "schools/main/exportSchoolResult?provinceId="+_this.data.province+"&cityId="+_this.data.city+"&districtId="+_this.data.area+"Ids="+ArrId);
        })

        //导出报表
        $(document).on('click', '.exportAll-btn', function() {            
           window.open(app.url.api_base + "schools/main/exportSchoolResult?provinceId="+_this.data.province+"&cityId="+_this.data.city+"&districtId="+_this.data.area)
        })

        //mode loaddata
        $(document).on('click', '.add-more-data span', function() {
              _this.data.pageIndex+=1;
              laadData();
        })

        //国家
        $(document).on('change','#country',function(){
                $('#province option').remove();
                $('#city option').remove();
                $('#city').html('<option value="">请选择城市</option>');
                $('#area option').remove();
                $('#area').html('<option value="">请选择行政区(县)</option>');
                var num = $('#country').val();
                _this.data.country=num;
                _this.data.province='';
                _this.data.city='';
                _this.data.area='';
                getprovince(num)
        })
        //省份
        $(document).on('change', '#province', function() {
                $('#city option').remove();
                $('#area option').remove();
                $('#area').html('<option value="">请选择行政区(县)</option>');
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

        //地区
        $(document).on('change', '#area', function() {
                    var num = $('#area').val();
                    _this.data.area=num;
        });

        //获取国家
        function getcountry(){
          var data = {
                         'level': 1
                  };
            app.posttoken(app.url.api_base + "schools/main/areaListJsonResult",data,
                    function(req) {
                        if (req.code == 0) {
                            var data = req.data;
                            if (data.length > 0) {
                                var html = '<option value="">请选择国家</option>';
                                $.each(data, function(i, v) {
                                    html += '<option value="' + v. code+ '">' + v.name + '</option>';
                                });
                                $('#country').html(html);
                            }
                        } else {
                            Prompt.show(req.message);
                        }
                    });
        }

        //获取省份
        function getprovince(num){
          var data = {
                   'parentCode': num,
                   'level': 2
            };
            app.posttoken(app.url.api_base + "schools/main/areaListJsonResult",data,
                    function(req) {
                        if (req.code == 0) {
                            var data = req.data;
                            if (data.length > 0) {
                                var html = '<option value="">请选择省份(直辖市)</option>';
                                $.each(data, function(i, v) {
                                    html += '<option value="' + v. code+ '">' + v.name + '</option>';
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
                   'parentCode': num,
                   'level': 3
            };
            app.posttoken(app.url.api_base + "schools/main/areaListJsonResult", data,
                     function(req) {
                        if (req.code == 0) {
                            var data = req.data;
                            if (data.length > 0) {
                                var html = '<option value="">请选择城市</option>';
                                $.each(data, function(i, v) {
                                    html += '<option value="' + v. code+ '">' + v.name + '</option>';
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
                          'parentCode': num,
                         'level': 4
                         };
                    app.posttoken(app.url.api_base + "schools/main/areaListJsonResult", data,
                            function(req) {
                               if (req.code == 0) {
                                   var data = req.data;
                                   if (data.length > 0) {
                                       var html = '<option value="">请选择行政区(县)</option>';
                                       $.each(data, function(i, v) {
                                           html += '<option value="' + v.code + '">' + v.name + '</option>';
                                       });
                                       $('#area').html(html);
                                   }
                               } else {
                                   Prompt.show(req.message);
                               }
                    });
             }

             // 获取选中的列表ID;
             function eachListId(){
                 var arrId=new Array();
                 $('.table>tbody input').each(function(){
                     if($(this).is(':checked') ){
                         arrId.push($(this).parents('tr').attr('dataid'))
                     }
                 })
                return arrId;
             }
             //获取数据 
             function laadData() {
                  // _this.data.city != ''? $('.export-btn').show() : $('.export-btn').hide();
                  $('.checkall').attr("checked", false);
                  var data={
                        'pageNo':   _this.data.pageIndex,
                        'everyPage': _this.data.everyPage,
                        'provinceId':_this.data.province,
                        'cityId':_this.data.city,
                        'districtId':_this.data.area,
                        // 'country':_this.data.country
                  }
                 app.posttoken(app.url.api_base + "schools/main/campusMarketplace", data,
                        function(req) {
                          if(req.code==0){
                               var html='';
                               if(req.data.length>0){
                                          var listno = (_this.data.pageIndex-1)*10;
                                         $.each(req.data,function(i,v){
                                                       html+='<tr dataId='+v.id+'>';
                                                       html+='<td> <input type="checkbox" ></td>';
                                                       html+='<td>'+(i+1+listno)+'</td>';
                                                       html+='<td>'+replace(v.area)+'</td>';
                                                       html+='<td>'+replace(v.schoolName)+'</td>';
                                                       if (v.memberListCount>0) {
                                                            html+='<td><a href="maillist.html?NO='+v.id+'"  target="_blank">'+replace(v.memberListCount)+'</a></td>';
                                                        }else{
                                                            html+='<td>'+replace(v.memberListCount)+'</td>';
                                                        }
                                                        if (v.areaCount>0) {
                                                            html+='<td><a href="campuslist.html?NO='+v.id+'"  target="_blank">'+replace(v.areaCount)+'</a></td>';
                                                        }else{
                                                            html+='<td>'+replace(v.areaCount)+'</td>';
                                                        }
                                                       
                                                       if(v.onLineCount>0){
                                                            html+='<td><a href="online.html?NO='+v.id+'"  target="_blank">'+replace(v.onLineCount)+'</a></td>';
                                                       }else{
                                                            html+='<td>'+replace(v.onLineCount)+'</td>';
                                                       }
                                                       html+='<td>¥ '+replace(v.onLinePeriodicalPriceCount)+'</td>';
                                                        if(v.offLineCount>0){
                                                            html+='<td><a href="offlineresources.html?NO='+v.id+'"  target="_blank">'+replace(v.offLineCount)+'</a></td>';
                                                       }else{
                                                            html+='<td>'+replace(v.offLineCount)+'</td>';
                                                       }
                                                       
                                                       html+='<td>¥ '+replace(v.offLinePeriodicalPriceCount)+'</td>';
                                                       html+='<td>'+replace(v.openStatus)+'</td>';
                                                       html+='</tr>';
                                         })
                                         $('.add-more-data').show()
                                         $('.exportAll-btn').removeAttr("disabled");
                                         if(_this.data.pageIndex>1){
                                                $('.table>tbody').append(html)
                                         }else{
                                                $('.table>tbody').html(html)
                                         }
                                   }else{
                                        if(_this.data.pageIndex<=1){
                                            $('.table>tbody').html('');
                                          }
                                        $('.exportAll-btn').attr("disabled", 'disabled');
                                        Prompt.show('没有数据！');
                                   }
                        }
                   });   
             }
        };

    new loadData();
});