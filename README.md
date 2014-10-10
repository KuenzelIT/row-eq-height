#row-eq-height
Makes bootstraps experimental row-eq-height work. The script 


## Requirements
Jquery


## Usage
Just download the small script and include it somewhere behind Jquery. 
You can then use "row-eq-height" to make all columns in a row have the same height. 
Panels inside of those columns are also being resized equally.

~~~ html
<div class="row row-eq-height">
    <div class="col-md-4">
        aaa
    </div>
    <div class="col-md-4">
        bbb<br>ccc<br>ddd
    </div>
    <div class="col-md-4">
        bbb<br>ccc<br>ddd<br>bbb<br>ccc<br>ddd<br>bbb<br>ccc<br>ddd
    </div>
</div>
~~~
