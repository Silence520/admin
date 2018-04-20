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
                'schoolArea':_this.data.Id,
                'pageNo':   _this.data.pageIndex,
                'everyPage': _this.data.everyPage,       
            };
            app.posttoken(app.url.api_base + "schools/main/memberListJsonResult", data,
                function(req) {
                    if (req.code == 0) {
                        if (req.data != undefined && req.data.length > 0) {
                            $('.schoolname').html(req.data[0].schoolname+' 校区对接人通讯录');
                            var html = '';
                            $.each(req.data, function(i, v) {
                                html += '<tr>';
                                html += '<td>' + (i + 1) + '</td>';
                                html += '<td>' +replace( v.schoolname )+ '</td>';
                                html += '<td>' +replace( v.name )+ '</td>';
                                html += '<td>' +replace( v.title )+ '</td>';
                                html += '<td>' +replace( v.mobile1 )+ '</td>';
                                html += '<td>' +replace( v.wechat )+ '</td>';
                                html += '<td>' +replace( v.email )+ '</td>';
                                html += '</tr>';
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