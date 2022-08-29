function create_string() {
  var random_string = "";
  var charaters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < charaters.length; i++) {
    random_string += charaters.charAt(
      Math.floor(Math.random() * charaters.length)
    );
  }

  return random_string;
}

module.exports = create_string