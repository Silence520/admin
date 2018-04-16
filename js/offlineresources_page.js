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
           //返回
           $(document).on('click','.backup',function(){
               window.history.back()
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
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='<td></td>';
                       //        html+='</tr>';
    	}	
    };

    new loadData();
});

