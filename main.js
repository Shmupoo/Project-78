var images = ["https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1MTc3MjE0MzExMDgxNTQ1/topic-golden-gate-bridge-gettyimages-177770941.jpg", 
"https://static.tvtropes.org/pmwiki/pub/images/statue_of_liberty_tcm25_531714.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mount_Rushmore_detail_view_%28100MP%29.jpg/1200px-Mount_Rushmore_detail_view_%28100MP%29.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/St_Louis_night_expblend_cropped.jpg/1200px-St_Louis_night_expblend_cropped.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg"];
var names = ["Golden Gate Bridge", "Statue of Liberty", "Mount Rushmore", "St. Louis Arch", "Empire State Building"];
var i = 0;
function update()
{
    i++;
    var numbers_of_landmarks_in_array = 4
    if(i > numbers_of_landmarks_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("landmark_image").src = updatedImage;
    document.getElementById("landmark_name").innerHTML = updatedName;
}
