$(function() {
    function loadData() {
        this.init();
    }

    loadData.prototype.init = function() {
        var _this = this;
        var data = {
            id: app.getParameterByName('NO'),
        };
        app.posttoken(app.url.api_base + "schools/summResult", data, function(req) {

            $('.schoolCount').html(data.schoolCount + '所')
            $('.studentCount').html(data.studentCount + '人')
            $('.sourceCount').html(data.sourceCount + '个')
            $('.sepSourceCount').html(data.sepSourceCount + '人')
            $('.activityCount').html(data.activityCount + '块')
            $('.brandCount').html(data.brandCount + '个')

        })

    };

    new loadData();
});