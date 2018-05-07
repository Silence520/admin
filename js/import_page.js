$(function() {
    function loadData() {
        this.init();
    }

    loadData.prototype.init = function() {
        var _this = this;


        //确认导入
        $(document).on('click', '.BtnConfirm', function() {
            var addFile = document.getElementById('addFile').files[0];
            var first = $('#filetype').val();
            var data = new FormData();
            if ($.type(addFile) == 'undefined') {
                Prompt.show('请选择上传文件！');
                return false;
            }
            // if(first==''){
            //     Prompt.show('请选择上传文件类型！');
            //     return false;
            // }
            data.append('file', addFile);
            // data.append('type', first);
            app.postfile(app.url.api_base + "schools/main/importExcel", data, function(req) {
                   Prompt.show(req.message);
            });
        });

    };
    new loadData();
});

