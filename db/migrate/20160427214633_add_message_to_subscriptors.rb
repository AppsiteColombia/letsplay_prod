class AddMessageToSubscriptors < ActiveRecord::Migration
  def change
    add_column :subscriptors, :message, :text
  end
end
