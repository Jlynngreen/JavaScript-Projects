function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function myfunction() {
    var str = "Hello World"
    var res = str.toUpperCase();
    document.getElementById("caps").innerHTML = res;
}

function myFunction() {
    var str = "Mr. Green has a red house"
    var n = str.search("red");
    document.getElementById("sample").innerHTML = n;
  }

  function string_Method() {
      var X=182;
      document.getElementById("Numbers_to_string").innerHTML = X.toString();
  }

  function precision_Method() {
      var X = 12938.3012987376112;
      document.getElementById("Precision").innerHTML = X.toPrecision(10);
  }

  function myFunction() {
      var num = 5.56789;
      var n = num.toFixed();
      document.getElementById("fix").innerHTML =n;
  }

  function myfunction() {
      var str = "Hello Peeps";
      var res = str.valueOf();
      document.getElementById("try").innerHTML = res;
  }