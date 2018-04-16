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

            // html='<tr>';
            //        html='<td>1</td>';
            //        html='<td><a href="advertisement.html">约定圈</a></td>';
            //        html='<td>app</td>';
            //        html='<td>1234</td>';
            //        html='<td>1888</td>';
            //        html='<td>是</td>';
            //        html='<td>1888</td>';
            //        html='<td>423</td>';
            //        html='<td>423</td>';
            //        html='<td>页阅读数上线</td>';
            //        html='</tr>';
        }
    };

    new loadData();
});