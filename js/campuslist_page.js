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
        //删除选中数据
        $(document).on('click', '#btnDelData', function() {


        })

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
            //        html+='<td>东城区</td>';
            //        html+='<td>上海市浦东新区</td>';
            //        html+='<td>4000</td>';
            //        html+='<td>29:30</td>';
            //        html+='<td>188</td>';
            //        html+='<td>18888</td>';
            //        html+='<td>¥ 123，32434</td>';
            //        html+='</tr>';
        }
    };

    new loadData();
});