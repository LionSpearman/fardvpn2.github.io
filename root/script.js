window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
                          // Create a new cursor element
                          const cursor = document.createElement('div');
                          cursor.classList.add('cursor');

                          // Append the cursor to the body
                          document.body.appendChild(cursor);

                          // Add mousemove event listener to the document
                          document.addEventListener('mousemove', event => {
                            // Set the cursor position
                            cursor.style.left = event.clientX + 'px';
                            cursor.style.top = event.clientY + 'px';
                          });

                          // Add mousedown and mouseup event listeners to the document
                          document.addEventListener('mousedown', () => {
                            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                          });
                          document.addEventListener('mouseup', () => {
                            cursor.style.transform = 'translate(-50%, -50%) scale(0)';
                          });
                          $(window).on('scroll', function() {
                            var s = $(window).scrollTop(),
                                d = $(document).height(),
                                c = $(window).height();
                          
                            var scrollPercent = (s / (d - c)) * 100;
                          
                            $('#page-progress').width(scrollPercent + '%');
                          });


 