<?php 


function decrypt($encryptedText,$key)
	{
		$key = hextobin(md5($key));
		$initVector = pack("C*", 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f);
		$encryptedText = hextobin($encryptedText);
		$decryptedText = openssl_decrypt($encryptedText, 'AES-128-CBC', $key, OPENSSL_RAW_DATA, $initVector);
		return $decryptedText;
	}

    function hextobin($hexString) 
   	 { 
        	$length = strlen($hexString); 
        	$binString="";   
        	$count=0; 
        	while($count<$length) 
        	{       
        	    $subString =substr($hexString,$count,2);           
        	    $packedString = pack("H*",$subString); 
        	    if ($count==0)
		    {
				$binString=$packedString;
		    } 
        	    
		    else 
		    {
				$binString.=$packedString;
		    } 
        	    
		    $count+=2; 
        	} 
  	        return $binString; 
    	  } 



          $workingKey='DE826EF968F10B0DD1DCC540211008CB';		//Working Key should be provided here.
          $encResponse = '89d9f61cb5a2c262742d59b724760b013e02465c805bd2e562355a3eb56054a2b1eda84f22e922bff88a5ad59341c3b9ff47ff6f2fd86e6c726f0e9e53eac1e699993abbfd7d74ae779344f42de028c99aed6fd84be1d3cb0ea499fdb94f53a1413690fc5e7e089d59b3119c308faba879f642b3079597b74f371bd7de6909666ce3d227e0cd52bed655a066da771eca0a736227ee727cc3f307a1530a624941b43fd3011a424b2611f721e9e072836f7cf4c6b202c0db408dff43e213edf41aec525c0612b4b1a81f2b02878e225874f530753a15cd7633e99544520c46713d5e7b3485579fa1ceaa2666eed0e7f8ebc5177ac809149022c6341e831c1cec7c37ed9adfa11901989d61db1c85e62726d26b5705810ca090199d20305206bd8e132f1188c2c21b0340c4f87371d8733e874c5f737e3bfc7fe9cdf0824385d7eb11c0e1e5ce44bc679ce1417a69776f2892cebc782e0a1180e771ed64356adf8f92b5726b2d5b8e14e19ccf805cdfc7f353325e1872bf2c3ca9003e60ad519535586f202c56b75c9eb6b548634030393e5c453b2953f4a2fbbf8d4b2cd35e53d936ce4662b2c6580aa30d969fc49b7183fb98d489eaa312bcfa5eb1fde114f79ee57a68e9bc420e2578cbec18a9a9cb480606adcdc9995af2f790aff8410241a4cd9d521208e111dcd02400540484103d996d59b718d6cf134c26bb63747897aca2d71695f6c58da9c3caffe71a0f57a08d346d072f76ddd34312d9118ab7d9cc7ab872bb96b9e14f882ebb3d1eb83f36e434f2c17c536bfcb1abe56a259eea0cc3e00ec6e35c056402ebc6f8fbf33c4c9d63a812210e3537eeab2660e2d0e82c3ab444c91b2e0004603cef4707abdcb7dfb46697add807396585bde40be4a8ebb517a1b5728c49f2db87abab96628fe51a5621f30b709b3d7e1f7aa4f2049489902f8cc2baa9ca70dae9cf1264dd0ae6e4216c55409e19677273d851d1b9d42259e9b98ef8cb44e8afb852983eff5099'
        //   $encResponse=$_POST["encResp"];			//This is the response sent by the CCAvenue Server
          $rcvdString=decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.
    echo rcvdString;
?>
