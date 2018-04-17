$(function() {
    function loadData() {
        this.data = {
            Id: app.getParameterByName('NO'),
            pageIndex: 1,
            everyPage: 10,
        };
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
            // if (first == '') {
            //     Prompt.show('请选择一级渠道！');
            //     return false;
            // }
            data.append('uploadedFile', addFile);
            // http://47.98.161.17:8080/schools/main/importExcel
            // data.append('firstSourceId', first);
            app.postfile(app.url.api_base + "schools/main/importExcel", data, function(req) {

            });
        });


    };

    new loadData();
});