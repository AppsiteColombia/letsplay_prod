class ApplicationMailer < ActionMailer::Base
  # default from: "localhost:3000"
  default from: "contacto@letsplay.company"
  layout 'mailer'
end
