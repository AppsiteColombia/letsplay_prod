class Welcome < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.welcome.notify.subject
  #
  def notify(subscriptor)

  	@subscriptor = subscriptor
    mail to: subscriptor.mail, Bcc: "gerencia@letsplay.company", subject: "Bienvenido a Let's PLay"
  end

 # def contacto(subscriptor)
  #	@subscriptor = subscriptor
   # mail to: subscriptor.mail, subject: "Bienvenido a Let's PLay"
  #end 

   def contacto (subscriptor)
  	@subscriptor = subscriptor
    mail to: subscriptor.mail, Bcc: "gerencia@letsplay.company", subject: "Hemos registrado tu solicitud."
  end

end
