$(function() {
    function loadData() {
        this.init();
    }

    loadData.prototype.init = function() {
        var _this = this;
        laadData();
        //删除选中数据
        $(document).on('click', '#btnDelData', function() {
        })

        //下载数据
        $(document).on('click', '.downloadData', function() {})

        //mode loaddata
        $(document).on('click', '.add-more-data', function() {

        })


        //获取数据 
        function laadData() {

            // html+='<tr>';
            // html+='<td> <input type="checkbox" ></td>';
            // html+='<td>资源查询2018-04-14</td>';
            // html+='<td>资源查询</td>';
            // html+='<td>成功</td>';
            // html+='<td>2018-04-23 22:30:00</td>';
            // html+='<td><button type="button" class="btn btn-default downloadData">下载</button></td>';
            // html+='</tr>';

             if(_this.data.pageIndex>1){
                    $('.table>tbody').append(html)
             }else{
                    $('.table>tbody').html(html)
             }
        }
    };

    new loadData();
});

