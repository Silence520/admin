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

        //下载数据
        $(document).on('click', '.downloadData', function() {})

        //mode loaddata
        $(document).on('click', '.add-more-data', function() {

        })


        //获取数据 
        function laadData() {
             // onlineResult
            app.posttoken(app.url.api_base + "schools/main/onlineResult", {},
                   function(req) {
                        var data=JSON.parse(req)
                        var html='';
                        $.each(data,function(i,v){
                               html+='<tr>';
                               html+='<td>'+(i+1)+'</td>';
                               html+='<td><a href="advertisement.html?NO='+v.id+'">'+v.channelName+'</a></td>';
                               html+='<td>'+v.channelType+'</td>';
                               html+='<td>'+v.fans+'</td>';
                               html+='<td>'+v.daily+'</td>';
                               html+='<td>'+v.isofficial+'</td>';
                               html+='<td>'+v.periodicalprice+'</td>';
                               html+='<td>'+v.to4A+'</td>';
                               html+='<td>'+v.toguest+'</td>';
                               html+='<td>'+v.remarks+'</td>';
                               html+='</tr>';
                        })
                        $('.table>tbody').html(html)
              });
            
        }
    };

    new loadData();
});