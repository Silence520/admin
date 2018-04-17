$(function() {
    function loadData() {
        this.data = {
            Id: app.getParameterByName('NO'),
            pageIndex:1,
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
            app.posttoken(app.url.api_base + "schools/main/memberListJsonResult", {},
                   function(req) {
                        var data=JSON.parse(req)
                        var html='';
                        $.each(data,function(i,v){
                                   html+='<tr>';
                                   html+='<td>'+(i+1)+'</td>';
                                   html+='<td>'+v.schoolname+'</td>';
                                   html+='<td>'+v.name+'</td>';
                                   html+='<td>学校社长</td>';
                                   html+='<td>'+v.mobile1+'</td>';
                                   html+='<td>'+v.wechat+'</td>';
                                   html+='<td>'+v.email+'</td>';
                                   html+='</tr>';
                        })
                        $('.table>tbody').html(html)
              });   
        }

    };

    new loadData();
});