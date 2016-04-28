# Preview all emails at http://localhost:3000/rails/mailers/information
class InformationPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/information/notify
  def notify
    Information.notify Contact.new(name: 'CLIENTE information', email: 'gerencia@letsplay.company')
  end
end
