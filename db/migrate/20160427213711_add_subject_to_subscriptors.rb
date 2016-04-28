class AddSubjectToSubscriptors < ActiveRecord::Migration
  def change
    add_column :subscriptors, :subject, :string
  end
end

