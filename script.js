 
        document.getElementById("generate").addEventListener("click", function () {
          const passwordLength = document.getElementById("passwordLength").value;
          const includeUppercase = document.getElementById("includeUppercase").checked;
          const includeNumbers = document.getElementById("includeNumbers").checked;
          const includeSpecialChars = document.getElementById("includeSpecialChars").checked;

          const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
          const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          const numberChars = "0123456789";
          const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

          let chars = lowercaseChars;
          if (includeUppercase) chars += uppercaseChars;
          if (includeNumbers) chars += numberChars;
          if (includeSpecialChars) chars += specialChars;

          let password = "";
          for (let i = 0; i < passwordLength; i++) {
              const randomIndex = Math.floor(Math.random() * chars.length);
              password += chars.charAt(randomIndex);
          }

          document.getElementById("password").textContent = password;
      });
  