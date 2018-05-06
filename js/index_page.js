$(function() {
    function loadData() {
        this.init();
    }

    loadData.prototype.init = function() {
        var _this = this;
        laadData();
        

         //获取数据 
        function laadData() {
            
            app.posttoken(app.url.api_base + "schools/main/homePageCount", {},
                function(req) {
                    if (req.code == 0) {
                       var data = req.data;
                       $('.schoolCount').html( data.schoolCount+'所')
                       $('.studentCount').html( data.studentCount+'人')
                       $('.sourceCount').html( data.supplierCount+'个')
                       $('.sepSourceCount').html( data.memberListCount+'人')
                       // $('.activityCount').html( data.schoolCount+'块')
                       // $('.brandCount').html( data.schoolCount+'个')
                    } else {
                        Prompt.show(req.massage, '提示', function() {})
                    }

                });
        }

    };
    new loadData();
});