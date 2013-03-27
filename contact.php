<?php
/**
*
* This code was created by Joshua Getner.
* @license http://opensource.org/licenses/bsd-license.php BSD
*
*/

/**
* The email contact messages should go to.
*/
Send::to('jgetner@gmail.com');

/**
* send the mail
*/
Send::mail();

class Send{

	// the email to send to
	private static $email = '';
	
   /**
	* who is the mail going to
	* @param string $email
	* @return null
	*/
	public static function to($email){
		self::$email = $email;
	}
	
	/**
	* validate and send the mail
	* @return null
	*/
	public static function mail(){
		self::validate($_POST);
		
		$to      = self::$email;
 		$subject = $_POST['subject'];
		$body    = $_POST['message'];
		$headers = "From: " . self::$email . "\r\n" . "X-Mailer: php";
			 
		if(mail($to, $subject, $body, $headers)){
			echo("<p class = 'success'>Message sent!</p>");
		}else {
		    echo("<p class = 'alert'>Message delivery failed!</p>");
		}
	}
	
	/**
	* validate the message
	* @return bool
	*/
	private function validate(array $posts){
		if(!$_POST){
			header('Location: contact.html');
		}
		
		elseif(false === filter_var($_POST['name'] , FILTER_SANITIZE_STRING)){
			echo '<p class = "alert">Your name is invalid</p>';
			exit();
		}
		
		elseif(false === filter_var($_POST['email'] , FILTER_VALIDATE_EMAIL)){
			echo '<p class = "alert">Your email is invalid</p>';
			exit();
		}
		
		elseif(false === filter_var($_POST['subject'] , FILTER_SANITIZE_STRING)){
			echo '<p class = "alert">Your subject is invalid</p>';
			exit();
		}
		
		elseif(false === filter_var($_POST['message'] , FILTER_SANITIZE_STRING)){
			echo '<p class = "alert">Your message is invalid</p>';
			exit();
		}
		
		elseif(false === filter_var($_POST['human'] , FILTER_VALIDATE_INT)){
			echo '<p class = "alert">Your message is invalid</p>';
			exit();
		}
		
		else{
			return TRUE;
		}
	}
}

?>