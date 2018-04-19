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
            app.posttoken(app.url.api_base + "schools/main/memberListJsonResult", data,
                function(req) {
                    var req = JSON.parse(req)
                    if (req.code == 0) {
                        if (req.data != undefined && req.data.length > 0) {
                            var html = '';
                            $.each(req, function(i, v) {
                                html += '<tr>';
                                html += '<td>' + (i + 1) + '</td>';
                                html += '<td>' + v.schoolname + '</td>';
                                html += '<td>' + v.name + '</td>';
                                html += '<td>' + v.title + '</td>';
                                html += '<td>' + v.mobile1 + '</td>';
                                html += '<td>' + v.wechat + '</td>';
                                html += '<td>' + v.email + '</td>';
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