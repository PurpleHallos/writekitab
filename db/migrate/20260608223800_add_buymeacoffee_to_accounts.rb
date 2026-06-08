class AddBuymeacoffeeToAccounts < ActiveRecord::Migration[8.0]
  def change
    add_column :accounts, :enable_buymeacoffee, :boolean, default: false, null: false
    add_column :accounts, :buymeacoffee_identifier, :string
    add_column :accounts, :buymeacoffee_message, :string
    add_column :accounts, :buymeacoffee_color, :string, default: "#FFDD00"
    add_column :accounts, :buymeacoffee_position, :string, default: "Right"
  end
end
