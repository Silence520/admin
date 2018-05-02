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
                'schoolId':_this.data.Id,
                // 'pageNo':   _this.data.pageIndex,
                // 'everyPage': _this.data.everyPage,       
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
                                    html+='<td>'+replace(v.schoolarea)+'</td>';
                                    html+='<td>'+replace(v.schaddoolress )+'</td>';
                                    html+='<td>'+replace(v.students  )+'</td>';
                                    html+='<td>'+replace(v.teachers  )+'</td>';
                                    html+='<td>'+replace(v.teachers )+'</td>';
                                    html+='<td>'+replace(v.staffs  )+'</td>';
                                    html+='<td>'+replace(v.schaddoolress) +'</td>';
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