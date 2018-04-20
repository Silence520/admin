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

         //获取数据 
        function laadData() {
            var data = {
                'schoolArea ': "a"
            };
            app.posttoken(app.url.api_base + "schools/main/schoolAreaListJsonResult", data,
                function(req) {
                    if (req.code == 0) {
                        if (req.data != undefined && req.data.length > 0) {
                            var html = '';
                            $('.schoolname').html('校区 '+req.data[0].schoolname);
                            $.each(req.data, function(i, v) {
                                    html+='<tr>';
                                    html+='<td>'+(i+1)+'</td>';
                                    html+='<td>'+v.schoolarea+'</td>';
                                    html+='<td>'+v.schaddoolress +'</td>';
                                    html+='<td>'+v.students  +'</td>';
                                    html+='<td>'+v.teachers  +'</td>';
                                    html+='<td>'+v.teachers +'</td>';
                                    html+='<td>'+v.staffs  +'</td>';
                                    html+='<td>'+v.schaddoolress +'</td>';
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
        //     app.posttoken(app.url.api_base + "schools/main/onlineResult", {},
        //            function(req) {
        //                 // var data=JSON.parse(req)
        //                 var html='';
        //                 $.each(req,function(i,v){
        //                             html+='<tr>';
        //                             html+='<td>'+(i+1)+'</td>';
        //                             html+='<td>'+v.school+'</td>';
        //                             html+='<td>'+v.schoolarea+'</td>';
        //                             html+='<td>4000</td>';
        //                             html+='<td>29:30</td>';
        //                             html+='<td>188</td>';
        //                             html+='<td>18888</td>';
        //                             html+='<td>¥ 123，32434</td>';
        //                             html+='</tr>';
        //                 })
        //                 $('.table>tbody').html(html)
        //       });   
        // }


    };
    new loadData();
});