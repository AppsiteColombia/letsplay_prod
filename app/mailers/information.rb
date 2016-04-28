class Information < ApplicationMailer

  def notify(information)
  	@information = information
    mail to: information.email, subject: "Hemos registrado tu solicitud."
  end
end
