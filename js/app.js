function PagePosition(length, activePage) {
  this.length = length;
  this.activePage = activePage;
}

PagePosition.prototype.draw = function() {
  var container = $('.pageTiles');
  container.html('');

  for (var i = 1; i <= this.length; i++) {
    if (i == this.activePage) {
      container.append("<div class='pageIndicator active'></div>")
    } else {
      container.append("<div class='pageIndicator'></div>");
    }
  }

  container.css('width', $('.pageIndicator').outerWidth(true) * this.length);
}

function handlePageIndicator() {
  var pagesLength = $(".page").length;
  var activePage = $.mobile.activePage.attr('data-pagenum');
  var pagePos = new PagePosition(pagesLength, activePage);
  pagePos.draw();
}

$(document).ready(function() {
  handlePageIndicator();
  $(document).on("pagechange", function(event) {
    handlePageIndicator();
  });

  var player = $('#choicesVideo');
  $('#pagetwo').on('pagebeforeshow', function() {
    player.attr('src', 'https://www.youtube.com/embed/RiI9aIFiF-k');
  });

  $('#pagetwo').on('pagehide', function() {
    player.attr('src', '');
  });

  $('#pagethreeNext').click(function(ev) {
    var checkbox = $('#pledgeCheckbox');
    if (!checkbox.is(':checked')) {
      ev.preventDefault();
      $('#pledgeDialog').click();
    }
  });

  $('#pagefourNext').click(function(ev) {
    var input = $('#digiSig');
    if (input.val().length == 0) {
      ev.preventDefault();
      input.css('border', '1px solid red');
    } else {
      input.css('border', 'none');
    }
  });
});
