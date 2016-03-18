# Preview all emails at http://localhost:3000/rails/mailers/welcome
class WelcomePreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/welcome/notify
  def notify
    Welcome.notify Subscriptor.new(name: 'CLIENTE Subscriptor', mail: 'gerencia@letsplay.company')
  end

end
