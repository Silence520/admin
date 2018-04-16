$(function() {
    function loadData() {
        this.data = {
            Id: app.getParameterByName('NO'),
            pageIndex: hash ? hash : 1,
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

            // html+='<tr>';
            //        html+='<td>1</td>';
            //        html+='<td>北京航空</td>';
            //        html+='<td>侠名</td>';
            //        html+='<td>学校社长</td>';
            //        html+='<td>1888888888</td>';
            //        html+='<td>1888888888</td>';
            //        html+='<td>1888888@qq.com</td>';
            //        html+='</tr>';

        }
    };

    new loadData();
});