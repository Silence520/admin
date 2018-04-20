$(function() {
    function loadData() {
        this.init();
    }

    loadData.prototype.init = function() {
        var _this = this;


        //确认导入
        $(document).on('click', '.BtnConfirm', function() {
            var addFile = document.getElementById('addFile').files[0];
            // var first = $('#channel1').val();
            var data = new FormData();
            if ($.type(addFile) == 'undefined') {
                Prompt.show('请选择上传文件！');
                return false;
            }
            data.append('file', addFile);
            // http://47.98.161.17:8080/schools/main/importExcel
            // data.append('firstSourceId', first);
            app.postfile(app.url.api_base + "schools/main/importExcel", data, function(req) {

            });
        });

    };
    new loadData();
});

