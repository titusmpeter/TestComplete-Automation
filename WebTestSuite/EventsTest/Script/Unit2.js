function EventControl1_OnLogError(Sender, LogParams)
{
 Log.Message("Errors of ommission and commission");
 LogParams.Color = clBlue;
 LogParams.FontColor = clYellow;
 //LogParams.Locked = true;
 //LogParams.Locked = false;

}

function foo()
{
  Log.Error("Kabooom")
}