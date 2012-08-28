$(document).ready(function() {
    
    //����� �������� �����
    $('.form-close').click(function(){
        $('#overlay').hide();
        });
    $('.feedback-trigger .pseudo-link').click(function(){
        $('#overlay').show();
        });
    //\����� �������� �����
    
    $(function() {
        $('input[title]').bind({
            focus: function() {
                if ($(this).attr('title') == $(this).attr('value')) {
                    $(this).attr('value', '');
                }
            },
            blur: function() {
                if ($(this).attr('value') == '') {
                    $(this).attr('value', $(this).attr('title'));
                }
            }
        });
    });
});