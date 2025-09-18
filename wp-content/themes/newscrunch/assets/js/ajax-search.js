jQuery(document).ready(function($) {
    $('#s, #res').on('input', function() {
        let search = $(this).val();
        if (search.length > 0) {
            $.ajax({
                url: newscrunch_ajax.ajax_url,
                type: 'POST',
                data: {
                    action: 'newscrunch_live_search',
                    keyword: search
                },
                beforeSend: function() {
                    $('.search-results-container').remove();
                    $('#searchform').after('<div class="search-results-container">' + newscrunch_ajax.searching_text + '</div>');
                    $('#res-searchform').after('<div class="search-results-container">' + newscrunch_ajax.searching_text + '</div>');
                },
                success: function(response) {
                    $('.search-results-container').html(response);
                }
            });
        } else {
            $('.search-results-container').remove();
        }
    });
});