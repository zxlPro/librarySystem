$(function(){
    getList(1);
})
function pageList(pageNo,totalPages){
    $('#pageLimit').bootstrapPaginator({
        currentPage: pageNo,//当前页。
        totalPages: totalPages,//总页数。
        size:"normal",//应该是页眉的大小。
        bootstrapMajorVersion: 3,//bootstrap的版本要求。
        alignment:"right",
        numberOfPages:5,//显示的页数
        itemTexts: function (type, page, current) {//如下的代码是将页眉显示的中文显示我们自定义的中文。
            switch (type) {
                case "first": return "首页";
                case "prev": return "上一页";
                case "next": return "下一页";
                case "last": return "末页";
                case "page": return page;
            }
        },
        onPageClicked: function (event, originalEvent, type, page) {//给每个页眉绑定一个事件，其实就是ajax请求，其中page变量为当前点击的页上的数字。
            getList(page);
        }
    });
}

function getList(page){
    $('#list_tbody').html('');
    $.ajax({
        url:'queryBookList',
        type:'post',
        data:{pageNo:page,name:$('#bookName').val()},
        success:function(respJson){
            if(respJson.resultCode == '200'){
                var data = respJson.data.list;
                var pages = respJson.data.pages;
                var html = '';
                for(var i=0;i<data.length;i++){
                    var datai = data[i];

                  html+= '<tr>\
                      <td>'+datai.name+'</td>\
                    <td>'+datai.author+'</td>\
                    <td>'+datai.publish+'</td>\
                    <td>'+datai.isbn+'</td>\
                    <td>'+datai.price+'</td>\
                    <td>'+datai.number+'</td>';
                    if(datai.number == 0){
                    html+='<td>\
                                <button type="button" class="btn btn-defalut btn-xs" disabled="disabled">已空</button>\
                            </td>';
                    }else{
                        html+='<td>\
                                <button type="button" class="btn btn-primary btn-xs">预约</button>\
                            </td>';
                    };
                    html+='<td>' +
                            '<a href="reader_book_detail.html?bookId='+datai.bookId+'">\
                                <button type="button" class="btn btn-success btn-xs">详情</button>\
                            </a>\
                        </td>\
                    </tr>';
                }
                $('#list_tbody').html(html);
                pageList(page,pages);
            }
        }
    })
}

