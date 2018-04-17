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
            app.posttoken(app.url.api_base + "schools/main/onlineResult", {},
                   function(req) {
                        var data=JSON.parse(req)
                        var html='';
                        $.each(data,function(i,v){
                                    html+='<tr>';
                                    html+='<td>'+(i+1)+'</td>';
                                    html+='<td>'+v.schoolname+'</td>';
                                    html+='<td>'+v.schoolarea+'</td>';
                                    html+='<td>4000</td>';
                                    html+='<td>29:30</td>';
                                    html+='<td>188</td>';
                                    html+='<td>18888</td>';
                                    html+='<td>¥ 123，32434</td>';
                                    html+='</tr>';
                        })
                        $('.table>tbody').html(html)
              });   
        }


    };
    new loadData();
});