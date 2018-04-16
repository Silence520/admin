$(function() {
    function loadData() {
        this.data = {
            Id:app.getParameterByName('NO'),
            pageIndex:hash?hash:1,
            everyPage: 10,
        };
        this.init();
    }

    loadData.prototype.init = function() {
            var _this = this;
            laadData();
            //删除选中数据
           $(document).on('click','#btnDelData',function(){


           })

            //下载数据
           $(document).on('click','.downloadData',function(){
           })
        
        //mode loaddata
        $(document).on('click','.add-more-data',function(){

        })


        //获取数据 
        function laadData(){

            // html+='<tr>';
            // html+='<td> <input type="checkbox" ></td>';
            // html+='<td>1</td>';
            // html+='<td>北京市</td>';
            // html+='<td>北京航空大学</td>';
            // html+='<td><a href="maillist.html">3</a></td>';
            // html+='<td><a href="campuslist.html">3</a></td>';
            // html+='<td><a href="online.html">3</a></td>';
            // html+='<td>¥ 155.934.34</td>';
            // html+='<td><a href="offlineresources.html">2330</a></td>';
            // html+='<td>¥ 155.934.34</td>';
            // html+='<td>已开拓</td>';
            // html+='</tr>';
        }   
    };

    new loadData();
});


